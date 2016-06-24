/home/pi/rover/bin/www --NODE_PATH=. --NODE_ENV=development
/home/pi/mjpg-streamer/mjpg-streamer.sh start
git clone git://github.com/quick2wire/quick2wire-gpio-admin.git
cd quick2wire-gpio-admin
make
sudo make install
sudo adduser $USER gpio

https://github.com/rexington/quick2wire-gpio-admin/commit/e1974dd197573a0a846a9fbe35d9f3ff1cbb3884