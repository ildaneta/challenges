# Mobile Challenge - Example of using REM in React Native

## ![image](https://user-images.githubusercontent.com/21963291/85338764-45ba2d00-b4b9-11ea-921a-d15eb692b2ea.png) Menu Contents

- [Motivation](#pushpin-motivation)
- [Technologies](#woman_technologist-technologies)
- [Final Application](#computer-final-application)
- [Installation](#heavy_check_mark-installation)
- [Author](#pencil-author)

## :pushpin: Motivation

I often see many devs who experience interface breaks due to the use of absolute measurements, or due to using pixels (px).

I ended up studying more deeply and realized that the situation behind the pixel is much more complex than it looks.

So, I decided to create this project to complement the article I wrote to understand what the true value of the pixel is and how we can use REM to solve this problem.

To read the article visit:
[Dealing with responsiveness in mobile applications using REM.](https://ildaneta.dev/posts/lidando-com-responsividade-em-aplica%C3%A7%C3%B5es-m%C3%B3veis-utilizando-o-rem/)

## :woman_technologist: Technologies

- React Native
- [React Native Extended StyleSheet](https://github.com/vitalets/react-native-extended-stylesheet)

## :computer: Final Application

Using REM to define sizes
![Using REM to define sizes](https://user-images.githubusercontent.com/21963291/90189956-808f6180-dd94-11ea-9773-4aecb9d36c93.PNG)

Using the pixel to set the image size
![App with pixel](https://user-images.githubusercontent.com/21963291/90190051-b03e6980-dd94-11ea-9023-ac9e6067f605.PNG)

## :heavy_check_mark: Installation

1. First, you need to have NodeJS and Yarn installed, then, to clone the project via HTTPS, run the following command:

`git clone https://github.com/ildaneta/challenges`

2. If you already have a registered SSH key, you can perform the clone via SSH through the command:

`git clone git@github.com:ildaneta/challenges`

3. After cloning, enter the cloned repository:

`cd challenges`
`cd exampleREMRN`

4. Have an open emulator

- To check if you already have an emulator open, run:

`adb devices`

5. After being inside the cloned repository, download the dependencies using:

`yarn android` or `yarn add`

6. To run the tests, perform through the command:

`yarn test`

## :pencil: Author

- <a href="https://ildaneta.dev" target="_blank">Blog</a>
- <a href="https://www.linkedin.com/in/ilda-silva-neta/" target="_blank">LinkedIn</a>

Made with love :heart_decoration: by **Ilda Neta.**
MIT LICENSE
