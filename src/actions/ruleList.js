export function fetchRuleList() {
    return {
        type: 'RULE_LIST',
        url: 'http://localhost/ruleList.php',
        isNet: true,
    };
}