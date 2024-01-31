rm -rf node_modules && rm -rf yarn.lock

cd ios

pod deintegrate && cd ..

yarn && cd ios && pod install


# Mismatch between JavaScript code version and Reanimated Babel plugin version (3.6.2 vs. 3.6.1).