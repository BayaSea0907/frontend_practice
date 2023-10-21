// thisがどの値を参照するかは実行時に決まるため、
// 変数の代入などによって意図しないベースオブジェクトに変わる場合がある。
// この挙動によって扱いづらい場合があるので、callメソッドなどを使ってthisを指定して関数を呼び出すのが安全です。
describe('this', () => {
  it('基本はレシーバーを返す', () => {
    const obj = {
      name: 'thisさん',
      method1() { return this },
      method2() { return this.name },
    };
    expect(obj.method1()).toBe(obj);
    expect(obj.method2()).toBe(obj.name);
  });

  it('レシーバーがない場合はundefinedを返す', () => {
    const func = () => { return this };
    expect(func()).toBe(undefined);
  });
});
