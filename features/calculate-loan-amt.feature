Feature: Landing page - calculate loan amount

  Scenario Outline: Calculate estimated loan amount
    Given User launched loan calculator page
    And User enter details "<appType>", "<dependends>" and "<propertyType>"
    And User enter earnings "<annualIncome>" and "<otherIncome>"
    And User enter expenses "<livingExp>", "<hlRepayments>", "<olRepayments>", "<oCommitments>", "<creditCard>"
    When User clicks calculate button
    Then Verify estimated borrowing amount is $"482,000"

    Examples:
      | appType | dependends | propertyType    | annualIncome | otherIncome | livingExp | hlRepayments | olRepayments | oCommitments | creditCard |
      | Single  | 2          | Home to live in | 80000        | 10000       | 500       | 0            | 100          | 0            | 10000      |
