
const RULES = require('../rules');

function adaptRuleToValidator(aRuleName) {
  let ruleParts = extractRulePartsFrom(aRuleName);
  let ruleImplementation = RULES[ruleParts.name];

  if (!ruleImplementation) {
    throw new Error(`No rule with name "${aRuleName}" was found`);
  }

  return {
    name: ruleParts.name,
    test: bindRuleImplementationToArgs(
      ruleImplementation,
      ruleParts.args
    )
  };
}

function extractRulePartsFrom(aRuleName) {
  let ruleParts = aRuleName.split(':');

  return {
    name: ruleParts[0],
    args: ruleParts.slice(1)
  };
}

function bindRuleImplementationToArgs(aRuleImplementation, aListOfParams) {
  if (!aListOfParams.length) {
    return aRuleImplementation;
  }

  return Function.prototype.bind.apply(
    aRuleImplementation,
    [null].concat(aListOfParams));
}

module.exports = adaptRuleToValidator;

