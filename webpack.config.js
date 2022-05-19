var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'none',

    entry: './src/index.tsx',

    resolve: {
        modules: [path.resolve(__dirname, 'src'), 'node_modules']
    },

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),      /* 빌드 결과 저장 위치 (로컬 지준 절대경로) */
        // publicPath: '/',     /* 번들 파일 업로드 위치 (배포된 서버 기준 상대경로) */
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html',      /* 프로젝트 내 파일로 index.html 설정 */
            // title: 'React Typescript Base',      /* config 파일에서 index.html 설정 */
        }),
    ],

    /* https://webpack.kr/configuration/dev-server/ */
    devServer: {
        port: 9000,
        open: true,
    }
}
