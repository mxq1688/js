export default class Resampler {
  resampler;
  fromSampleRate;
  toSampleRate;
  channels;
  inputBufferSize;
  ratioWeight;
  lastWeight;
  tailExists;
  outputBuffer;
  outputBufferSize;
  lastOutput;
  constructor(
    fromSampleRate,
    toSampleRate,
    channels,
    inputBufferSize
  ) {
    if (!fromSampleRate || !toSampleRate || !channels) {
      throw new Error("Invalid settings specified for the resampler.");
    }
    this.resampler = null;
    this.fromSampleRate = fromSampleRate;
    this.toSampleRate = toSampleRate;
    this.channels = channels || 0;
    this.inputBufferSize = inputBufferSize;
    this.initialize();
  }

  initialize() {
    if (this.fromSampleRate == this.toSampleRate) {
      // Setup resampler bypass - Resampler just returns what was passed through
      this.resampler = (buffer) => {
        return buffer;
      };
      this.ratioWeight = 1;
    } else {
      if (this.fromSampleRate < this.toSampleRate) {
        // 上采样
        // 如果上采样，则使用通用线性插值，
        //因为线性插值会产生我们想要的梯度
        //在这种情况下，每个输出有两个输入采样点，工作正常
        this.linearInterpolation();
        this.lastWeight = 1;
      } else {
        // 下采样
        // Custom resampler I wrote that doesn't skip samples
        // like standard linear interpolation in high downsampling.
        // This is more accurate than linear interpolation on downsampling.
        this.multiTap();
        this.tailExists = false;
        this.lastWeight = 0;
      }

      // Initialize the internal buffer:
      this.initializeBuffers();
      this.ratioWeight = this.fromSampleRate / this.toSampleRate;
    }
  }

  bufferSlice(sliceAmount) {
    // Typed array and normal array buffer section referencing:
    try {
      return this.outputBuffer.subarray(0, sliceAmount);
    } catch (error) {
      try {
        // Regular array pass:
        this.outputBuffer.length = sliceAmount;
        return this.outputBuffer;
      } catch (error) {
        // Nightly Firefox 4 used to have the subarray function named as slice:
        return this.outputBuffer.slice(0, sliceAmount);
      }
    }
  }

  initializeBuffers() {
    this.outputBufferSize =
      Math.ceil(
        ((this.inputBufferSize * this.toSampleRate) /
          this.fromSampleRate /
          this.channels) *
        1.000000476837158203125
      ) +
      this.channels +
      this.channels;
    try {
      this.outputBuffer = new Float32Array(this.outputBufferSize);
      this.lastOutput = new Float32Array(this.channels);
    } catch (error) {
      this.outputBuffer = [];
      this.lastOutput = [];
    }
  }

  linearInterpolation() {
    this.resampler = (buffer) => {
      let bufferLength = buffer.length;
      const channels = this.channels;
      // let outLength;
      // let ratioWeight;
      let weight;
      let firstWeight;
      let secondWeight;
      let sourceOffset;
      let outputOffset;
      // let outputBuffer;
      let channel;

      if (bufferLength % channels !== 0) {
        throw new Error("Buffer was of incorrect sample length.");
      }
      if (bufferLength <= 0) {
        return [];
      }

      const outLength = this.outputBufferSize;
      const ratioWeight = this.ratioWeight;
      weight = this.lastWeight;
      firstWeight = 0;
      secondWeight = 0;
      sourceOffset = 0;
      outputOffset = 0;
      const outputBuffer = this.outputBuffer;

      for (; weight < 1; weight += ratioWeight) {
        secondWeight = weight % 1;
        firstWeight = 1 - secondWeight;
        this.lastWeight = weight % 1;
        for (channel = 0; channel < this.channels; ++channel) {
          outputBuffer[outputOffset++] =
            this.lastOutput[channel] * firstWeight +
            buffer[channel] * secondWeight;
        }
      }
      weight -= 1;
      for (
        bufferLength -= channels, sourceOffset = Math.floor(weight) * channels;
        outputOffset < outLength && sourceOffset < bufferLength;

      ) {
        secondWeight = weight % 1;
        firstWeight = 1 - secondWeight;
        for (channel = 0; channel < this.channels; ++channel) {
          outputBuffer[outputOffset++] =
            buffer[sourceOffset + (channel > 0 ? channel : 0)] * firstWeight +
            buffer[sourceOffset + (channels + channel)] * secondWeight;
        }
        weight += ratioWeight;
        sourceOffset = Math.floor(weight) * channels;
      }
      for (channel = 0; channel < channels; ++channel) {
        this.lastOutput[channel] = buffer[sourceOffset++];
      }
      return this.bufferSlice(outputOffset);
    };
  }

  multiTap() {
    this.resampler = (buffer) => {
      const bufferLength = buffer.length;
      const channels = this.channels;
      let weight = 0;
      let channel;
      let actualPosition = 0;
      let amountToNext = 0;
      let alreadyProcessedTail = !this.tailExists;
      let outputOffset = 0;
      let currentPosition = 0;

      if (bufferLength % channels !== 0) {
        throw new Error("Buffer was of incorrect sample length.");
      }
      if (bufferLength <= 0) {
        return [];
      }
      const outLength = this.outputBufferSize;
      const output_variable_list = [];
      const ratioWeight = this.ratioWeight;
      this.tailExists = false;
      const outputBuffer = this.outputBuffer;
      for (channel = 0; channel < channels; ++channel) {
        output_variable_list[channel] = 0;
      }
      console.log(buffer, channels, outLength, alreadyProcessedTail, 111);
      do {
        if (alreadyProcessedTail) {
          weight = ratioWeight;
          for (channel = 0; channel < channels; ++channel) {
            output_variable_list[channel] = 0;
          }
        } else {
          weight = this.lastWeight;
          for (channel = 0; channel < channels; ++channel) {
            output_variable_list[channel] = this.lastOutput[channel];
          }
          alreadyProcessedTail = true;
        }
        while (weight > 0 && actualPosition < bufferLength) {
          amountToNext = 1 + actualPosition - currentPosition;
          console.log(weight, amountToNext, currentPosition, 222);
          if (weight >= amountToNext) {
            for (channel = 0; channel < channels; ++channel) {
              output_variable_list[channel] +=
                buffer[actualPosition++] * amountToNext;
            }
            currentPosition = actualPosition;
            weight -= amountToNext;
            
          } else {
            for (channel = 0; channel < channels; ++channel) {
              output_variable_list[channel] +=
                buffer[actualPosition + (channel > 0 ? channel : 0)] * weight;
            }
            currentPosition += weight;
            weight = 0;
            break;
          }
        }
        console.log(weight, amountToNext, currentPosition, 333);
        if (weight === 0) {
          for (channel = 0; channel < channels; ++channel) {
            outputBuffer[outputOffset++] =
              output_variable_list[channel] / ratioWeight;
          }
        } else {
          this.lastWeight = weight;
          for (channel = 0; channel < channels; ++channel) {
            this.lastOutput[channel] = output_variable_list[channel];
          }
          this.tailExists = true;
          break;
        }
      } while (actualPosition < bufferLength && outputOffset < outLength);
      return this.bufferSlice(outputOffset);
    };
  }

  resample(buffer) {
    if (this.fromSampleRate == this.toSampleRate) {
      this.ratioWeight = 1;
    } else {
      if (this.fromSampleRate < this.toSampleRate) {
        this.lastWeight = 1;
      } else {
        this.tailExists = false;
        this.lastWeight = 0;
      }
      this.initializeBuffers();
      this.ratioWeight = this.fromSampleRate / this.toSampleRate;
    }
    return this.resampler(buffer);
  }
}
