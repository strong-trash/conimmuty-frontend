// 로컬스토리지에 object의 array를 저장하고 불러오기 위한 야매 스토리지 스크립트입니다.
// [ { }, { }, { } ] 이런걸 저장합니다.

// element schema
// {
//   title : string,
//   content : string,
// }

export class yameStorage {
	// properties
	key = null;
	value = null;

	constructor() {
		const item = {
			key: 'CONIMMUTY_OLDPOSTS_1',
			defaultValue: [],
		};

		this.key = item.key;

		const currentValue = this.getFromLocalStorage();
		if (currentValue === null) {
			this.set(item.defaultValue);
		} else {
			this.value = currentValue;
		}
	}

	set(newValue) {
		localStorage.setItem(this.key, JSON.stringify(newValue));
		this.value = this.getFromLocalStorage();
		return this.value;
	}

	get() {
		if (this.value == null) {
			console.error(
				`[GoraniStore:get]The property 'value' has no valid value --- ${this.key}`,
			);
			return null;
		} else {
			return this.value;
		}
	}

	getFromLocalStorage() {
		const raw = localStorage.getItem(this.key);

		const result = JSON.parse(raw);
		return result;
	}
}
