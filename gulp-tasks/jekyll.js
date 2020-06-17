const { spawn } = require('child_process');

async function jekyllBuildDev() {
    try {
        await spawn(
            process.platform === 'win32' ? 'jekyll.bat' : 'jekyll',
            ['build', '--config', '_config.dev.yml', '--incremental'],
            {
                stdio: 'inherit',
            },
        );
    } catch (err) {
        console.error(err);
    }
}

async function jekyllBuildProd() {
    try {
        await spawn(
            process.platform === 'win32' ? 'jekyll.bat' : 'jekyll',
            ['build', '--config', '_config.yml', '--incremental'],
            {
                stdio: 'inherit',
            },
        );
    } catch (err) {
        console.error(err);
    }
}

module.exports = { jekyllBuildDev, jekyllBuildProd };
