export function fetchRuleList() {
    return {
        type: 'RULE_LIST',
        url: 'http://www.zhanspace.cn/ssr/ruleList.php',
        isNet: true,
    };
}