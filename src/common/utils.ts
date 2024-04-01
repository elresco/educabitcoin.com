export function encodeElementId(id: unknown) {
    if (typeof id === "string") {
        return encodeURI(id.replaceAll(" ", "-"))
    }
    throw new Error(`encodeId: Can NOT encode non string id ${id}`)
}