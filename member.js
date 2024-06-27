function skillsMember()
{
    // Get the member ID
    var memberID = getMemberID();

    // Get the skills
    var skills = getSkills(memberID);

    // Display the skills
    displaySkills(skills);
}