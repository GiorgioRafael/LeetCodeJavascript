function tupleSameProduct(nums) {
    let productMap = new Map();
    let contador = 0;
    const n = nums.length
    for (let i = 0; i < n; i++) {
        const a = nums[i];

        for (let j = i + 1; j < n; j++) {
            const b = nums[j];

            let product = a*b;

            if (productMap.has(product)) {
                let combinations = productMap.get(product);
                for (let [a, b] of combinations) {
                    if (a !== i && a !== j && b !== i && b !== j) {
                        contador += 8;
                    }
                }
            }
            if (productMap.has(product)) {
                productMap.get(product).push([i, j]);
            } else {
                productMap.set(product, [[i, j]]);
            }
        }
    }
    return contador;
}