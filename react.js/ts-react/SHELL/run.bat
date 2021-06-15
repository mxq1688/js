
set source=%1
set target=%2

set index=%target%\index.html
set static=%target%\static

del /a /f /s /q %index%
rd /q /s %static%

xcopy  /e /y  /S %source% %target% 