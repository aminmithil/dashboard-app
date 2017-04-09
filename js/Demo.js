class Demo {
	a() {
		console.log('class Demo');
	}
}
class D extends Demo {
	b(){
		super.a();
		console.log('class D');
	}
}