/*
 * Arrayクラスの挙動を覚える
 */

describe('Array', () => {
  describe('Arrayのリテラル記法とArray.prototype.atの挙動の違いを検証する', () => {
    const array = ['a', 'b', 'c'];

    it('0番目の要素を取得できる', () => {
      expect(array[0]).toBe('a');
      expect(array.at(0)).toBe('a');
    });

    it('リテラル記法だと末尾の要素を取得できず、Array.prototype.atなら取得できる', () => {
      expect(array[-1]).toBe(undefined);
      expect(array.at(-1)).toBe('c');
    });

    it('存在しないインデックスを指定して要素を取得しようとするとundefinedを返す', () => {
      expect(array[100]).toBe(undefined);
      expect(array.at(100)).toBe(undefined);
    });
  });
});
