/*
 * Arrayクラスの挙動を覚える
 */

describe('String', () => {
  describe('定義方法', () => {
    it('バッククォート(\)で改行できる', () => {
      const text1 = `文字列1
です。`;
      const text2 = `文字列2
      です。`;

      expect(text1).toBe('文字列1\nです。');
      expect(text2).toBe('文字列2\n      です。');
    });


    it('バッククォート(\)と${}でインライン展開できる', () => {
      const subject = 'インライン展開';
      const text1 = `${subject}できる`;
      const text2 = "${subject}できない";

      expect(text1).toEqual('インライン展開できる');
      expect(text2).toEqual('${subject}できない');
    });

    it('スラッシュ(/)でエスケープできる', () => {
      const text = "エスケープシーケンス\"";
      expect(text).toBe('エスケープシーケンス"');
    });
  });

  describe('文字列の分解(split)と結合(join)', () => {
    it('テスト', () => {
      const text = "1-2-3";
      expect(text.split('-')).toEqual(['1', '2', '3']);

      const numbers = ['1', '2', '3'];
      expect(numbers.join(',')).toEqual('1,2,3');
    });
  });

  describe 
});
