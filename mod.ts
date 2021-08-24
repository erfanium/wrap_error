export async function wrapError<T, U = Error>(
  p: T | Promise<T>,
): Promise<[U, undefined] | [null, T]> {
  try {
    const result = await p;
    return [null, result];
  } catch (e) {
    return [e, undefined];
  }
}
