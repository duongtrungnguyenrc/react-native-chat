export abstract class Validator {
  validate(): string | null {
    for (const key in this) {
      if (!this[key] || this[key] === "") {
        return `${key} must not empty`;
      }
    }
    return null;
  }
}
