export const ruleSlideChange = (currentValue, value, images) => {
    const sum = currentValue + value
    return sum < 0
        ? sum + images.length
        : sum >= images.length
        ? sum - images.length
        : sum
}
