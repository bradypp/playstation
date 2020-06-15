const { spawn } = require('child_process');

async function jekyllBuild() {
    try {
        await spawn(
            process.platform === 'win32' ? 'jekyll.bat' : 'jekyll',
            [
                'build',
                '--config',
                process.env.NODE_ENV === 'production' ? '_config.yml' : '_config.dev.yml',
                '--incremental',
            ],
            {
                stdio: 'inherit',
            },
        );
    } catch (err) {
        console.error(err);
    }
}

module.exports = jekyllBuild;
