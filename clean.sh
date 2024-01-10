rm -rf node_modules && rm -rf yarn.lock

cd ios

pod deintegrate && cd ..

yarn && cd ios && pod install