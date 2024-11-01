import React, { useState } from 'react';
import { Plus, Search, Edit2, Trash2, Upload } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import Sidebar from './Sidebar';
// import { Alert, AlertDescription } from "@/components/ui/alert";

const AdminTrainingCentre = () => {
  const [isNewProgramOpen, setIsNewProgramOpen] = useState(false);
  const [isNewCenterOpen, setIsNewCenterOpen] = useState(false);
  const [isEditProgramOpen, setIsEditProgramOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState(null);

  const handleEditProgram = (program) => {
    setSelectedProgram(program);
    setIsEditProgramOpen(true);
  };

  const ProgramForm = ({ isEdit = false, program = null }) => (
    <div className="py-4 space-y-4">
      <div className="grid grid-cols-1 gap-4">
        <div className="space-y-2">
          <Label htmlFor="title">Program Title</Label>
          <Input
            id="title"
            placeholder="Enter program title"
            defaultValue={program?.title}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="description">Description</Label>
          <textarea 
            id="description"
            className="w-full min-h-[100px] p-2 border rounded-md"
            placeholder="Enter program description"
            defaultValue={program?.description}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="courses">Number of Courses</Label>
            <Input
              id="courses"
              placeholder="e.g., 50"
              defaultValue={program?.courses}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="students">Number of Students</Label>
            <Input
              id="students"
              placeholder="e.g., 1000+"
              defaultValue={program?.students}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="address">Address</Label>
          <Input
            id="address"
            placeholder="City, State"
            defaultValue={program?.address}
          />
        </div>

        <div className="space-y-2">
          <Label>Program Image</Label>
          <div className="p-4 text-center border-2 border-dashed rounded-lg">
            <div className="space-y-2">
              <div className="flex items-center justify-center">
                <img 
                  src={program?.image || "/api/placeholder/400/200"}
                  alt="Preview"
                  className="object-cover w-full rounded h-25"
                />
              </div>
              <Button variant="outline" className="w-full">
                <Upload className="w-4 h-4 mr-2" />
                Upload Image
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const CenterForm = () => (
    <div className="py-4 space-y-4">
      <div className="space-y-2">
        <Label htmlFor="centerTitle">Center Title</Label>
        <Input
          id="centerTitle"
          placeholder="Enter center title"
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="centerDescription">Description</Label>
        <textarea 
          id="centerDescription"
          className="w-full min-h-[150px] p-2 border rounded-md"
          placeholder="Enter center description"
        />
      </div>
    </div>
  );

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar/>
      <div className="flex-1 p-8 overflow-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Training Programs Management</h1>
          <p className="text-gray-500">Manage your training centers and programs</p>
        </div>

        <Tabs defaultValue="centers" className="space-y-6">
          <TabsList>
            <TabsTrigger value="centers">Training Centers</TabsTrigger>
            <TabsTrigger value="programs">Training Cards</TabsTrigger>
          </TabsList>

          <TabsContent value="centers" className="space-y-6">
           
            <div className="flex items-center justify-between">
              <div className="flex flex-1 max-w-md gap-4">
                <Input 
                  placeholder="Search centers..." 
                  className="max-w-xs"
                  prefix={<Search className="w-4 h-4 text-gray-400" />}
                />
              </div>
              <Dialog open={isNewCenterOpen} onOpenChange={setIsNewCenterOpen}>
                <DialogTrigger asChild>
                  <Button className="text-white bg-blue-500 hover:bg-blue-600">
                    <Plus className="w-4 h-4 mr-2" />
                    Add New Center
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl bg-white">
                  <DialogHeader>
                    <DialogTitle>Add New Training Center</DialogTitle>
                    <DialogDescription>
                      Fill in the details for the new training center.
                    </DialogDescription>
                  </DialogHeader>
                  <CenterForm />
                  <DialogFooter>
                    <Button variant="outline" onClick={() => setIsNewCenterOpen(false)}>
                      Cancel
                    </Button>
                    <Button className="text-white bg-blue-500 hover:bg-blue-600">
                      Create Center
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Main Training Center</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h3 className="mb-4 font-semibold">Center Information</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">
                          Center Title
                        </label>
                        <Input defaultValue="Our Training Center" />
                      </div>
                      <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">
                          Description
                        </label>
                        <textarea 
                          className="w-full min-h-[150px] p-2 border rounded-md" 
                          defaultValue="At our training center, we're dedicated to nurturing talent..."
                        />
                      </div>
                    </div>
                  </div>
                  
                </div>
                <div className="flex justify-end gap-4 mt-6">
                  <Button variant="outline">Cancel</Button>
                  <Button className="text-white bg-blue-500 hover:bg-blue-600">Save Changes</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="programs" className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex flex-1 max-w-md gap-4">
                <Input 
                  placeholder="Search programs..." 
                  className="max-w-xs"
                />
              </div>
              <Dialog open={isNewProgramOpen} onOpenChange={setIsNewProgramOpen}>
                <DialogTrigger asChild>
                  <Button className="text-white bg-blue-500 hover:bg-blue-600">
                    <Plus className="w-4 h-4 mr-2" />
                    Add New Program
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl bg-white">
                  <DialogHeader>
                    <DialogTitle>Add New Training Program</DialogTitle>
                    <DialogDescription>
                      Fill in the details for the new training program.
                    </DialogDescription>
                  </DialogHeader>
                  <ProgramForm />
                  <DialogFooter>
                    <Button variant="outline" onClick={() => setIsNewProgramOpen(false)}>
                      Cancel
                    </Button>
                    <Button className="text-white bg-blue-500 hover:bg-blue-600">
                      Create Program
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3, 4, 5, 6].map((index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="relative mb-4">
                      <img 
                        src="/api/placeholder/400/200"
                        alt="Program preview"
                        className="object-cover w-full h-40 rounded"
                      />
                      <div className="absolute bottom-2 left-2 bg-[#ff5e15] px-3 py-1 text-white font-semibold rounded">
                        Innovation Lab {index}
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="text-sm text-gray-600">XXX Courses • XXX+ Students</p>
                          <p className="text-sm text-gray-500">City, State</p>
                        </div>
                        <div className="flex gap-2">
                          <Dialog open={isEditProgramOpen} onOpenChange={setIsEditProgramOpen}>
                            <DialogTrigger asChild>
                              <Button 
                                variant="ghost" 
                                size="sm" 
                                className="w-8 h-8 p-0"
                                onClick={() => handleEditProgram({
                                  title: `Innovation Lab ${index}`,
                                  description: "Lorem ipsum dolor sit amet...",
                                  courses: "XXX",
                                  students: "XXX+",
                                  address: "City, State"
                                })}
                              >
                                <Edit2 className="w-4 h-4" />
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-4xl bg-white">
                              <DialogHeader>
                                <DialogTitle>Edit Training Program</DialogTitle>
                                <DialogDescription>
                                  Modify the details of the training program.
                                </DialogDescription>
                              </DialogHeader>
                              <ProgramForm isEdit={true} program={selectedProgram} />
                              <DialogFooter>
                                <Button variant="outline" onClick={() => setIsEditProgramOpen(false)}>
                                  Cancel
                                </Button>
                                <Button className="text-white bg-blue-500 hover:bg-blue-600">
                                  Save Changes
                                </Button>
                              </DialogFooter>
                            </DialogContent>
                          </Dialog>
                          <Button variant="ghost" size="sm" className="w-8 h-8 p-0 text-red-600 hover:text-red-700">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint fugit quia natus veritatis tempora repellendus?
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminTrainingCentre;