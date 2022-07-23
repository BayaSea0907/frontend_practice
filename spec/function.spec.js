describe('function', () => {
  it('function演算子を使った定義', () => {
    const function_name = function() {}
    expect(typeof(function_name)).toEqual('function');
  });

  it('アロー関数', () => {
    const function_name = () => {}
    expect(typeof(function_name)).toEqual('function');
  });

  it('無名関数', () => {
    expect(typeof(()=>{})).toEqual('function');
    expect(typeof((x)=>{})).toEqual('function');
    expect(typeof(x=>{})).toEqual('function');
    expect(typeof(x=>x+x).toEqual('function');
  });
});
