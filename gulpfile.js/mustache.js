const { task, src, dest } = require('gulp');
const mustache = require('gulp-mustache');

task('mustache-render-content', () => {
    const mustacheJson = {
        language: 'pt-br',
        author: 'Fernando Eduardo da Silva (@aironou)',
        title: 'Aironou',
        content: ''
    };
    return src('/aironou.github.io/src/content/**/*.mustache')
        .pipe(mustache())
        .on('data', file => mustacheJson.content = file.contents.toString())
        .on('data', file => {
            src('/aironou.github.io/src/layout/base.mustache')
                .pipe(mustache(mustacheJson));
        });
});
