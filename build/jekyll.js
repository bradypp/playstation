const { spawn } = require('child_process');

async function jekyllBuild() {
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

module.exports = jekyllBuild;
