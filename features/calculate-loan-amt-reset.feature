Feature: Landing page - reset values

  Scenario Outline: Calculate estimated loan amount and reset values
    Given User launched loan calculator page
    And User enter details "<appType>", "<dependends>" and "<propertyType>"
    And User enter earnings "<annualIncome>" and "<otherIncome>"
    And User enter expenses "<livingExp>", "<hlRepayments>", "<olRepayments>", "<oCommitments>", "<creditCard>"
    And User clicks calculate button
    And User clicks startOver button
    Then Verify all the fields are reset to default
    

    Examples:
      | appType | dependends | propertyType    | annualIncome | otherIncome | livingExp | hlRepayments | olRepayments | oCommitments | creditCard |
      | Single  | 3          | Home to live in | 100000        | 10000       | 700       | 0            | 300          | 0            | 20000      |
