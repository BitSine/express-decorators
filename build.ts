import { exec } from 'child_process';

exec('tsc --outDir dist/cjs', () => console.log('built CJS'));
exec('tsc --outDir dist/esm --module ES6', () => console.log('built ESM'));
