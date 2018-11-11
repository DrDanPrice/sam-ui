export default `\
type SamCitizen {
  _id: ID!
  individual_id: Int
  age: Int
  bracket_age: String
  asthma: String
  citizenship: String
  coords: [Float]
  date_erected: String
  disability: String
  educational_attainment: String
  employment: String
  english_speaking_skills: String
  health_insurance: String
  household_income: Int
  household_type: String
  quality_description: String
  racial_entropy_index: Float
  limit: Int
  member: String
  nativity: String
  one_of: Int
  race: String
  sex: String
  size: Int
  veteran_status: String
}

type Factor {
  factorName: [String]
}

type Category {
  categoryName: [String]
}

type FindFactors {
  category: Category
  factor: Factor
}

type Query {
  samcity(
      limit:Int,
      one_of:Int,
      individual_id: Int,
      age: Int,
      bracket_age: String,
      citizenship: String,
      member:String,
      race:String,
      disability: String,
      educational_attainment:String,
      employment: String,
      english_speaking_skills: String,
      nativity: String,
      quality_description: String,
      health_insurance: String,
      household_income: Int,
      household_type: String,
      asthma:String,
      dist:Float,
      sex: String,
      size: Int,
      veteran_status: String,
      racial_entropy_index: Float,
      coords:[Float]
    ):[SamCitizen],
  factorlist(category:String):[Factor]
}

type Mutation {
  createSamCitizen(name: String!): SamCitizen
}
`;

/*
{
    person (
        filter: {
            age: { GT: 18 },
            name: {
                firstName: { EQ: "John" }
            }
        },
        sort: { age: DESC },
        pagination: { limit: 50 }
    ) {
        name {
            lastName
        }
        age
    }
}
*/
