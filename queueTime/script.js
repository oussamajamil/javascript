function queueTime(customers, n) {
    if (customers.length === 0)
        return 0;
    var b = customers.reduce((a, b) => a + b);
    return b / n >= 1 ? b / n : Math.max(...customers);
}