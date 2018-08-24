
print ("Welcome to your new UNIVERSE. How would you like to proceed")
print ("Become a hero or Become a villain")
hero= "hero"
villain= "villain"
#What user puts in
is_hero = False
user_input = input()
is_villain = False

while user_input != villain and user_input != hero: #loop
    print ("Become a hero or Become a villain")
    user_input = input()
# if they pick hero
if user_input == hero:
    print ("welcome hero")
    # background information
    print ("As a teen in high school its hard to juggle school, sports and extracuriculars")
    print ("especially with villains running around causing trouble")
    print ("Are you going to use your power for the greater good or live a normal life by remaining dormant?")
    print ("choose use or dormant")
    #choice to use power or lay it dormant # for a normal life
    user_input= input()
    use= "use"
    dorment= "dorment"
#While loop for choices
    #while loop
    while user_input != use and user_input != dorment: #loop
        print ("choose use or dormant")
        user_input = input()
    if user_input == use:
        print ("congradulations you are now Echo with the power of releasing, obsorbing soundwaves and with sharp hearing.")
    #story of choice on who to save hero debut
        print ("You are out on patrol for the first time when you see a burning building with people trapped within")
        print("As you are heading to there you see a cat hanging on dearly from a tree with a child right under the cat beckoning it,")
        print("you can see that its a wild cat and it will be dangerous for the child if it lands on his face")
        print("Will you go save the people in the building or the kid and the cat?")
        print("building or kid")
    #choices, user input and what it tells about characteristics, variables
        user_input= input()
        building= "building"
        kid= "kid"
        while user_input != kid and user_input != building: #loop
            print("building or kid")
        if user_input == building:
            print("Thats very heroic of you, your first night as a hero and you've managed to save two civilians with the help of a veteran hero,")
            print("as you looked to hwere the child was you just see the child crying and picked up by a nearby ambulance and bloody paw prints on the floor")
            print ("But no worries you found out they were only surface superfacial wounds and the kid is alright, and now everyone knows theres a new hero in town looking after them")
            print ("You finally get to have a date with your significant other and went to a date to a picnic")

        if user_input == kid:
            print("Whew, you managed yo get there just in time and caught the cat safely with your soundwaves before anyone got hurt.")

        #benefits and consequences of choices

        if user_input == dorment:
            print ("Its alright the world has too many heroes already anyway")
             #scenario of not being able to save himself and his friends form a villain attack

             #Choice again to use power or remain dormant

             #recall events and ask if they will be a hero for good or vigilanty for revenge

        #define choices and inputs
        #while loop

    # if the pick villain
if user_input == villain:
    print ("welcome Villain")
    print ("As a teen in high school its hard to juggle school, sports and extracuriculars, expecially with villains running around causing trouble.")
    print ("Will you utilize or no ")
#While loop for choice
    user_input= input()
    utilize= "utilize"
    no= "no"
    while user_input != utilize and user_input != no: #loop
        print ("choose utilize or no")
        user_input = input()
    if user_input == utilize:
        print ("congradulations you are now Icarus with the power to generate flames and heat as well as heat vision ")
    #story of choice on what villain activity for debut

    #choices, user input and what it tells about characteristics

    #benefits and consequences of choices

    if user_input == no:
        print ("Its alright the world has too many villains already anyway")
    #scenario of not being able to save himself and his friends form a villain attack

    #Choice again to use power or remain dormant

    #recall events and ask if they will be a villain for revenge or for personal benefits
    input()

    #define choices and inputs
    #while loop
