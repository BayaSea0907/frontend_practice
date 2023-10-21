describe('Object', () => {
  describe('メンバーの定義方法', () => {
    it('メソッド', () => {
      const obj = {
        method1: function(){},
        method2: () => {},
        method3() {}
      }
      expect(typeof(obj.method1)).toEqual('function');
      expect(typeof(obj.method2)).toEqual('function');
      expect(typeof(obj.method3)).toEqual('function');
    });
  });
});
