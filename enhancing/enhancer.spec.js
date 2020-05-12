const enhancer = require("./enhancer");
// test away!
describe("enhancer", () => {
	describe("success()", () => {
		it("should increase enhancement by one", () => {
			expect(
				enhancer.success({ name: "Bordeaux Axe", durability: 100, enhancement: 15 })
			).toEqual({ name: "Bordeaux Axe", durability: 100, enhancement: 16 });
		});

		it("should not increase enhancement if it is already 20", () => {
			expect(
				enhancer.success({ name: "Bordeaux Axe", durability: 100, enhancement: 20 })
			).toEqual({ name: "Bordeaux Axe", durability: 100, enhancement: 20 });
		});
	});

	describe("fail()", () => {
		it("should decrease durability by 5 if enhancement < 15", () => {
			expect(
				enhancer.fail({ name: "Bordeaux Axe", durability: 100, enhancement: 10 })
			).toEqual({ name: "Bordeaux Axe", durability: 95, enhancement: 10 });
		});

		it("should decrease durability by 10 if enhancement = 15", () => {
			expect(
				enhancer.fail({ name: "Bordeaux Axe", durability: 100, enhancement: 15 })
			).toEqual({ name: "Bordeaux Axe", durability: 90, enhancement: 15 });
		});

		it("should decrease durability by 10 if enhancement > 15", () => {
			expect(
				enhancer.fail({ name: "Bordeaux Axe", durability: 100, enhancement: 16 })
			).toEqual({ name: "Bordeaux Axe", durability: 90, enhancement: 16 });
		});

		it("should decrease durability by 10 and enhancement by 1 if enhancement > 16", () => {
			expect(
				enhancer.fail({ name: "Bordeaux Axe", durability: 100, enhancement: 17 })
			).toEqual({ name: "Bordeaux Axe", durability: 90, enhancement: 16 });
		});
	});

	describe("repair()", () => {
		it("should set durability to 100", () => {
			expect(
				enhancer.repair({ name: "Bordeaux Axe", durability: 90, enhancement: 16 })
			).toEqual({ name: "Bordeaux Axe", durability: 100, enhancement: 16 });
		});

		it("durability should stay at 100 if full", () => {
			expect(
				enhancer.repair({ name: "Bordeaux Axe", durability: 100, enhancement: 16 })
			).toEqual({ name: "Bordeaux Axe", durability: 100, enhancement: 16 });
		});
	});

	describe("get()", () => {
		it("should add text to name if enhancement > 0", () => {
			expect(
				enhancer.get({ name: "Bordeaux Axe", durability: 100, enhancement: 16 })
			).toEqual({ name: "[+16] Bordeaux Axe", durability: 100, enhancement: 16 });
		});

		it("should not add text to name if enhancement = 0", () => {
			expect(
				enhancer.get({ name: "Bordeaux Axe", durability: 100, enhancement: 0 })
			).toEqual({ name: "Bordeaux Axe", durability: 100, enhancement: 0 });
		});
	});
});