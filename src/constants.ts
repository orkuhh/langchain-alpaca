import os from 'node:os'

/**
 * Ignore diagnostic outputs
 * https://github.com/ggerganov/llama.cpp/pull/48
 */
export const redirectingStderrOutput = os.platform() === 'win32' ? '2>&1 > $null' : '2>/dev/null'
/**
 * The character output when alpaca wants user input
 * https://gist.github.com/dominikwilkowski/60eed2ea722183769d586c76f22098dd
 * >
    data "\u001b[33m\r\n> "
    data.startsWith('>') false
    data.startsWith('') false
    onMessage0
    data "\u001b[1m\u001b[32m"
    data.startsWith('>') false
    data.startsWith('\u001b[1m\u001b[32m') true
 */
// eslint-disable-next-line unicorn/escape-case
export const readInputControlCharacter = '\u001b[33m'
// eslint-disable-next-line unicorn/escape-case
export const outputStartControlCharacter = '\u001b[0m'
/**
 * It prints this after the answer, and wait for second user input
 * "\u001b[0m\r\n> \u001b[1m\u001b[32m"
 *
 * But it will be on output for first time:
 * "\u001b[0mHello"
 *
 * So have to check `\r\n>` too.
 */
// eslint-disable-next-line unicorn/escape-case
export const readSecondInputControlCharacter = outputStartControlCharacter + '\r\n>'
