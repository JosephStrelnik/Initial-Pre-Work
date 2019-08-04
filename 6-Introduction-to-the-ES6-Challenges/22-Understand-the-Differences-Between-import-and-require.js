//Learned that import vs require to import functions is a more efficient way to save loading time and memory by choosing which parts of a file or module to load instead of the entire file or module

"use strict";
import { capitalizeString } from "string-functions";
capitalizeString("hello!");
