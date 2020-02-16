# RELBI-AR
MSFT hololens to capture sorrounding and provide location information

Inspiration
Immersive technologies including AR and VR have already been used in gaming and communication. Everybody loves discovering new places and exploring landmarks. However current technologies including GPS location fails us in the cities with high rise. Our goal was to bridge this gap using the latest AR/VR technologies. We have used scanning the public station name or remarkable landmarks present around to identify your location.

What it does
It allows you to take picture of the public transport station or landmarks around to identify your location.

How we built it
For the microsoft hololens, we used mixed-reality toolkit on Unity Engine. 3d models were created in Blender and Gimp. REST API calls and data parsing was done as a python service. HTTP request was done from Unity to get the liva data.

Challenges we ran into
We had no idea how to integrate REST API calls and other services in node and python in Unity and Microsoft Hololens. We looked at the possibility to use Azure cognitive services. Finally we figured out a way to make an HTTP request from Unity. Unity Engine along with Microsoft Visual studio and mixed-reality toolkit are very bulky and operate only on MSFT windows. So not everyone had this environment to prototype rapidly.

Accomplishments that We are proud of
It was a steep learning curve. We managed to integrate python and node services into Unity and HTTP Request. The 3d model creation and visualizing in hololens was amazing. The immersiveness hololens provides is best to any other technologies.

What we learned
Everything from creating 3d models. using Unity and integrating other services in unity.

What's next for RELBI AR
We are going to keep working and integrating novel immersive technologies to make mobility better and easier for all the explorers and wanderers out there.

Built With
