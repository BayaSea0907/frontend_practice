/*
 * プロトタイプオブジェクトの挙動を覚える
 */

describe('Object.prototype', () => {
  it('プロトタイプオブジェクトにnameメソッドが追加されたことを検証する', () => {
    const my_object = {}
    expect(my_object.name).toBe(undefined);

    // my_objectオブジェクトにnameメソッドを定義
    my_object.name = () => { return 'まいおぶじぇくと' };
    expect(my_object.name()).toBe('まいおぶじぇくと');

    // my_objectオブジェクトをプロトタイプオブジェクトとしたnew_my_objectオブジェクトを生成
    const new_my_object = Object.create(my_object);
    expect(new_my_object.name()).toBe('まいおぶじぇくと');
    expect(new_my_object.__proto__.name()).toBe('まいおぶじぇくと');
  });
});

