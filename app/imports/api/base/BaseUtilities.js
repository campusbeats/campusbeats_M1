import { Profiles } from '/imports/api/profile/ProfileCollection';
import { Interests } from '/imports/api/interest/InterestCollection';
import { Abilities } from '/imports/api/ability/AbilityCollection';
import { Styles } from '/imports/api/style/StyleCollection';
import { Favorites } from '/imports/api/favorites/FavoritesCollection';
import { PeopleInterested } from '/imports/api/people-interested/PeopleInterestedCollection';
import { Goals } from '/imports/api/goal/GoalCollection';
import { Experiences } from '/imports/api/experience/ExperienceCollection';

export function removeAllEntities() {
  Profiles.removeAll();
  Interests.removeAll();
  Abilities.removeAll();
  Styles.removeAll();
  Favorites.removeAll();
  PeopleInterested.removeAll();
  Goals.removeAll();
  Experiences.removeAll();
}
