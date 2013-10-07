/**
 * @author vulcanCom
 */

// test("테스트 메소드 이름", 테스트로직 함수);

test("hello test", function(){
	ok( 1==1, 'hello test (0, 1, 1)은 0개의 에러, 1개의 성공, 1개의 테스트 함수를 의미한다.');
});

test("equal test 1", function(){
	ok( 1 == 1, "Passed!");
	ok( 1 == "1", "Passed!");
});

test("equal test 2", function(){
	equal(1, 1, "Passed!");
	equal(1, "1", "Passed!");
	deepEqual(1, "1", 
			'deepEqual()을 가지고 1과 "1"을 서로 비교했을때는 equal과 다르게' + '\n' + 
			'두 입력값의 원시 데이터타입, 오브젝트, 정규식등을 검사해서 ' +  '\n' + 
			'다르다는 것을 확인하기 때문에 equal과 1failed이 발생 하였다.');
});

test("strictEqual test", function(){
	strictEqual(1, "1", 'strictEqual()이라는 것도 있는데 이것은 value와 type을 검사한다.');
});

test("expect test", function(){
	// 테스트 개수를 지정
	expect(4);
	
	ok( 1 == 1, "Passed!");
	ok( 1 == "1", "Passed!");	
	equal(1, 1, "Passed!");
	equal(1, "1", "Passed!");
	
	// 1 over!!
	//equal(1, "1", "테스트 개수가 오버됨");
});

// 좌 상단의 콤보박스를 통해 해당 모듈만 테스트 선택 할 수도 있다.
module( "group A" );
test( "a basic test example", function() {
  ok( true, "group A에 속한 테스트" );
});
test( "a basic test example 2", function() {
  ok( true, "group A에 속한 테스트" );
});
 
module( "group B" );
test( "a basic test example 3", function() {
  ok( true, "group B에 속한 테스트" );
});
test( "a basic test example 4", function() {
  ok( true, "group B에 속한 테스트" );
});

// 비동기 호출 테스트
asyncTest( "asynchronous test: one second later!", function() {
	  expect( 1 );
	  //stop();
	  setTimeout(function() {
	    ok( true, "Passed and ready to resume!" );
	    start();
	  }, 1000);
	});


/*
function twitterSearch(callback){
	//$.getJSON("http://search.twitter.com/search.json?q=jquery", callback);
	
	setTimeout(function(){
		callback.call(null, []);
	}, 1000);
}

test("a async test", function(){
	expect(1)
	stop();
	
	twitterSearch(function(data){
		//console.log("f1 : " + data.results.length);
		ok( data.length > 0, "tweet is not empty");
		start();	
	});
});
*/













