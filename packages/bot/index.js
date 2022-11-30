const CoreClass = require('./core/core.class')
const ProviderClass = require('./provider/provider.class')
const FlowClass = require('./io/flow.class')
const { addKeyword, addAnswer, addChild, toSerialize } = require('./io/methods')

/**
 * Crear instancia de clase Bot
 * @param {*} args
 * @returns
 */
const createBot = async ({ flow, database, provider }) =>
    new CoreClass(flow, database, provider)

/**
 * Crear instancia de clase Io (Flow)
 * @param {*} args
 * @returns
 */
const createFlow = (args) => {
    return new FlowClass(args)
}

/**
 * Crear instancia de clase Provider
 * @param {*} args
 * @returns
 */
const createProvider = (providerClass = class {}) => {
    const providerInstance = new providerClass()
    if (!providerClass.prototype instanceof ProviderClass)
        throw new Error('El provider no implementa ProviderClass')
    return providerInstance
}

module.exports = {
    createBot,
    createFlow,
    createProvider,
    addKeyword,
    addAnswer,
    addChild,
    toSerialize,
    ProviderClass,
    CoreClass,
}
