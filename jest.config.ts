import type { JestConfigWithTsJest } from 'ts-jest';

export default {
  coverageDirectory: './coverage',
  coverageProvider: 'v8',
  moduleNameMapper: {
    '^@apps/web(|/.*)$': '<rootDir>/apps/my-app/src/$1',
    '^@libs/my-lib(|/.*)$': '<rootDir>/libs/my-lib/src/$1',
  },
  preset: 'ts-jest',
  rootDir: '.',
  roots: ['<rootDir>/apps/', '<rootDir>/libs/'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironment: 'node',
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        astTransformers: {
          before: ['<rootDir>/automapper.plugin.ts'],
        },
      },
    ],
  },
} satisfies JestConfigWithTsJest;
