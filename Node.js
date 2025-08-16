// interactiveDeploy.js
// Node.js Interactive GitHub Pages Deploy Script

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// --- CONFIG ---
const REPO_URL = 'https://github.com/ridoy99005/CYBER-BOT-MAHIN.git';
const LOCAL_DIR = 'CYBER-BOT-MAHIN';

function askQuestion(query) {
  return new Promise(resolve => rl.question(query, ans => resolve(ans)));
}

(async function(){
  try {
    const branch = (await askQuestion('Enter deploy branch (default: gh-pages): ')) || 'gh-pages';
    const htmlFile = (await askQuestion('Enter HTML file name (default: index.html): ')) || 'index.html';

    console.log('1️⃣ Cloning or pulling repo...');
    if (!fs.existsSync(LOCAL_DIR)) {
      execSync(`git clone ${REPO_URL}`);
    } else {
      console.log('Repo exists, pulling latest...');
      execSync(`cd ${LOCAL_DIR} && git pull`);
    }

    console.log('2️⃣ Copying HTML file...');
    const srcPath = path.join(__dirname, htmlFile);
    const destPath = path.join(__dirname, LOCAL_DIR, 'index.html');
    if (!fs.existsSync(srcPath)) {
      console.error('❌ HTML file not found!');
      process.exit(1);
    }
    fs.copyFileSync(srcPath, destPath);

    console.log(`3️⃣ Switching to branch '${branch}'...`);
    execSync(`cd ${LOCAL_DIR} && git checkout -B ${branch}`);

    console.log('4️⃣ Adding, committing, and pushing...');
    execSync(`cd ${LOCAL_DIR} && git add index.html && git commit -m "Update GitHub Pages" && git push -u origin ${branch} --force`);

    console.log('✅ Deployment complete!');
    console.log(`🔗 Live link: https://${REPO_URL.split('/')[3]}.github.io/${REPO_URL.split('/')[4].replace('.git','')}/`);

    rl.close();
  } catch (err) {
    console.error('❌ Error:', err.message);
    rl.close();
  }
})();
