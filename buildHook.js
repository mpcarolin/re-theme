const fs = require('fs')
const path = require('path')
const { promisify } = require('util')
const { exec } = require('child_process')
const cmdExec = promisify(exec)

const runCmd = async (cmd) => {
  try {
    const output = await cmdExec(cmd)
    return output
  }
  catch(e){
    console.log(e.stack)
  }

}

export default function buildHook(platform){
  return {
    name: 'buildHook',
    buildEnd: async () => {
      if(!process.env.DOC_APP_PATH || platform === 'native') return

      const hookFile = path.join(process.env.DOC_APP_PATH, 'retheme-hook.js')
      await runCmd(`rm -rf ${ hookFile }`)
      await runCmd(`echo "export {}" > ${ hookFile }`)

    }
  }
} 