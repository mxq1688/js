const path = require('path');
const fs = require('fs');
const PNG = require('pixelmatch/node_modules/pngjs').PNG;
const pixelmatch = require('pixelmatch');

const {
  configureToMatchImageSnapshot
} = require('jest-image-snapshot');

const SNAPSHOTS_PATH = 'snapshots'

expect.extend({
  toMatchImageSnapshot: configureToMatchImageSnapshot({
    customSnapshotsDir: path.join(__dirname, SNAPSHOTS_PATH),
    customDiffDir: path.join(__dirname, SNAPSHOTS_PATH, 'diffDir')
  }),
})

function toMatchImage(path1, path2, diffPath, options = { threshold: 0.1 }) {
  const img1 = PNG.sync.read(fs.readFileSync(path.join(__dirname, path1)))
  const img2 = PNG.sync.read(fs.readFileSync(path.join(__dirname, path2)))
  const { width, height } = img1
  const diff = new PNG({ width, height })

  const result = pixelmatch(img1.data, img2.data, diff.data, width, height, options)

  const diff_image_path = path.join(__dirname, diffPath)
  fs.writeFileSync(diff_image_path, PNG.sync.write(diff))

  return result
}

function toMatchSnapshotsImage(pathName1, pathName2, diffPathName, options) {
  const snapshots_path1 = path.join(SNAPSHOTS_PATH, pathName1)
  const snapshots_path2 = path.join(SNAPSHOTS_PATH, pathName2)
  const snapshots_diffPath = path.join(SNAPSHOTS_PATH, diffPathName)
  return toMatchImage(snapshots_path1, snapshots_path2, snapshots_diffPath, options)
}

global.toMatchImage = toMatchImage;
global.toMatchSnapshotsImage = toMatchSnapshotsImage;
