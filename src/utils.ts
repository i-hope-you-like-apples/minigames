export function isValidUUID(uuid: string): boolean {
    let uuidRegex = /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i;

    return uuidRegex.test(uuid);
}