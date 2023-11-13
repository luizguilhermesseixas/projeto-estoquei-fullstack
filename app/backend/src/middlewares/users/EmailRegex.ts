export default class EmailRegex {
  private static emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  public static isValidEmail(email: string): boolean {
    return this.emailRegex.test(email);
  }
}
