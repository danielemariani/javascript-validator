
const RULES = require('../rules');

function adaptRuleToValidator(aRuleName) {
  let ruleImplementation = RULES[aRuleName];

  if (!ruleImplementation) {
    throw new Error(`No rule with name "${aRuleName}" was found`);
  }

  return {
    name: aRuleName,
    test: ruleImplementation
  };
}

module.exports = adaptRuleToValidator;

