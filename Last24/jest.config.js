module.exports = {
    prettierPath: './node_modules/.bin/prettier',
    collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!src/*.{js,jsx,ts,tsx}'],
    testMatch: ['<rootDir>/src/**/__tests__/*.test.(j|t)s?(x)'],
    testEnvironment: 'node',
    testURL: 'http://localhost',
    transform: {
        '^.+\\.(js|jsx|mjs)$': '<rootDir>/node_modules/babel-jest',
        '^.+\\.tsx?$': '<rootDir>/build/configs/jest/typescriptTransform.js',
        '^.+\\.css$': '<rootDir>/build/configs/jest/cssTransform.js',
        '^(?!.*\\.(js|jsx|mjs|css|json)$)': '<rootDir>/build/configs/jest/fileTransform.js',
    },
    transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|ts|tsx)$'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    globals: {
        'ts-jest': {
            tsConfigFile: './tsconfig.json',
        },
    },
    setupTestFrameworkScriptFile: '<rootDir>/build/configs/jest/setupTests.ts',
};
