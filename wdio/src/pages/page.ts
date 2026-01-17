export default abstract class Page {
  public abstract open(): Promise<void | WebdriverIO.Request>;
  public abstract isLoaded(): Promise<boolean>;
}
