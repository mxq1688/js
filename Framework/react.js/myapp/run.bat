echo 'build...'
    node ./scripts/build.js
echo 'move...'
    @REM node ./scripts/customBuild.js


@REM 获取当前路径 %cd%
set rootPath=%cd%
set source=%rootPath%.\build
set target=%rootPath%.\build-test
set index=%target%\index.html
set static=%target%\static
del /a /f /s /q %index%
rd /q /s %static%
xcopy  /e /y  /S %source% %target% 