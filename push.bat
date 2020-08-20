ECHO OFF
git add .
git commit -m "added new features"
git pull 
git push
cd .\slacky-sc\
npm run build
firebase deploy
PAUSE