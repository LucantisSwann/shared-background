import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
    format: 'iife',
    moduleName: 'SharedBackground',
    legacy: true,
    plugins: [
        resolve(),
        commonjs(),
        babel(
            {
                presets: [
                    ['env',
                        {
                            modules: false,
                            targets: {browsers: ["last 2 versions", "ie >= 9"]},
                        }
                    ]
                ],
                plugins: ["transform-runtime"],
                runtimeHelpers: true,
                exclude: 'node_modules/**',
            }
        ),
        uglify()
    ],
};